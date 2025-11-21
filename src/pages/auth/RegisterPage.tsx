import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthCard from "../../components/ui/AuthCard";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const { t } = useTranslation();
  const RegisterSchema = z
    .object({
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
    formState: { errors, isSubmitting },
  } = useForm<RegisterData>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: { email: "", password: "", confirmPassword: "" },
  });

  const onSubmit = async (data: RegisterData) => {
    try {
      await new Promise((r) => setTimeout(r, 800));

      console.log("Registration successful:", data);

      // Demo error
      if (data.email === "exists@example.com") {
        setError("root", {
          type: "server",
          message: t("register.emailExists"),
        });
        return;
      }
    } catch (err) {
      setError("root", {
        type: "server",
        message: t("register.serverError"),
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
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 dark:bg-gray-700 hover:bg-blue-700 dark:hover:bg-gray-500"
        >
          {isSubmitting ? t("register.loading") : t("register.submit")}
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
