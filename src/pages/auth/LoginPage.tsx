import { useForm, type SubmitHandler } from "react-hook-form";
import AuthCard from "../../components/ui/AuthCard";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../hooks/queries/useAuthQuery";
import { ROUTE_PATHS } from "../../router/routes";

type LoginData = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoginData>({
    mode: "onSubmit",
    defaultValues: { email: "", password: "" },
  });

  const { mutateAsync } = useLoginMutation();

  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    try {
      const serverResponse = await mutateAsync(data); 
      console.log("Login successful:", serverResponse);
      reset();
      navigate(ROUTE_PATHS.HOME);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError("root", {
        type: "server",
        message: err.response?.data?.message || t("login.serverError"),
      });
    }
  };

  return (
    <AuthCard>
      <h1 className="text-2xl text-gray-700 dark:text-gray-100 font-bold mb-4 text-center">
        {t("login.title")}
      </h1>

      {errors.root && (
        <p className="text-red-500 dark:text-red-800 text-sm mb-4 text-center">
          {errors.root.message}
        </p>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={t("login.emailLabel")}
          type="email"
          placeholder={t("login.emailPlaceholder")}
          {...register("email")}
        />

        <Input
          label={t("login.passwordLabel")}
          type="password"
          placeholder={t("login.passwordPlaceholder")}
          {...register("password")}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 dark:bg-gray-700 hover:bg-blue-700 dark:hover:bg-gray-500"
        >
          {isSubmitting ? t("login.loading") : t("login.submit")}
        </Button>
      </form>

      <p className="pt-4 text-sm text-gray-600 text-center">
        {t("login.noAccount")}{" "}
        <Link
          to={ROUTE_PATHS.REGISTER}
          className="text-blue-600 dark:text-gray-100 hover:underline"
        >
          {t("login.register")}
        </Link>
      </p>
    </AuthCard>
  );
}
