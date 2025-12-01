import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthCard from "../../components/ui/AuthCard";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../hooks/queries/useAuthQuery";
import { ROUTE_PATHS } from "../../router/routes";
import toast from "react-hot-toast";
import { ButtonColor } from "../../constants/buttonColors";

export default function RegisterPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { mutateAsync: registerMutate, isPending: isRegistering } =
    useRegisterMutation();
  const RegisterSchema = z
    .object({
      username: z
        .string()
        .min(3, t("register.errors.usernameMin"))
        .nonempty(t("register.errors.usernameRequired")),
      email: z
        .string()
        .email(t("register.errors.invalidEmail"))
        .nonempty(t("register.errors.requiredEmail")),
      password: z.string().min(6, t("register.errors.passwordMin")),
      confirmPassword: z.string().min(6, t("register.errors.passwordMin")),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: t("register.errors.passwordsDontMatch"),
    });

  type RegisterData = z.infer<typeof RegisterSchema>;

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterData>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: { email: "", password: "", confirmPassword: "" },
  });

  const onSubmit = async (data: RegisterData) => {
    try {
      const res = await registerMutate({
        username: data.username,
        email: data.email,
        password: data.password,
      });

      if (!res.success) {
        setError("root", {
          type: "server",
          message: t("register.serverError"),
        });
      }
      toast.success(res.message);
      reset();
      navigate(ROUTE_PATHS.HOME);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const message = err.response?.data?.message || t("register.serverError");
      toast.error(message);
      setError("root", {
        type: "server",
        message,
      });
    }
  };

  return (
    <AuthCard>
      <h1 className="text-2xl text-gray-700 dark:text-gray-100 font-bold mb-4 text-center">
        {t("register.title")}
      </h1>

      {errors.root && (
        <p className="text-red-500 dark:text-red-800 text-sm mb-4 text-center">
          {errors.root.message}
        </p>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={t("register.usernameLabel")}
          type="text"
          placeholder={t("register.usernamePlaceholder")}
          {...register("username")}
          error={errors.username?.message}
        />

        <Input
          label={t("register.emailLabel")}
          type="email"
          placeholder={t("register.emailPlaceholder")}
          {...register("email")}
          error={errors.email?.message}
        />

        <Input
          label={t("register.passwordLabel")}
          type="password"
          placeholder={t("register.passwordPlaceholder")}
          {...register("password")}
          error={errors.password?.message}
        />

        <Input
          label={t("register.confirmPasswordLabel")}
          type="password"
          placeholder={t("register.confirmPasswordPlaceholder")}
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />

        <Button
          buttonColor={ButtonColor.primary}
          type="submit"
          disabled={isSubmitting || isRegistering}
        >
          {isSubmitting || isRegistering
            ? t("register.loading")
            : t("register.submit")}
        </Button>
      </form>

      <p className="pt-4 text-sm text-gray-600 dark:text-gray-200 text-center">
        {t("register.haveAccount")}{" "}
        <Link
          to="/login"
          className="text-blue-600 dark:text-gray-100 hover:underline"
        >
          {t("register.login")}
        </Link>
      </p>
    </AuthCard>
  );
}
