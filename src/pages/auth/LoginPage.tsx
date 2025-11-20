import { useForm, type SubmitHandler } from "react-hook-form";
import AuthCard from "../../components/ui/AuthCard";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useTranslation } from "react-i18next";

type LoginData = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginData>({
    mode: "onSubmit",
    defaultValues: { email: "", password: "" },
  });

  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    try {
      await new Promise((r) => setTimeout(r, 800));

      // for testing purposes only
      const isInvalid =
        data.email !== "demo@example.com" || data.password !== "password";
      if (isInvalid) {
        setError("root", {
          type: "server",
          message: t("login.invalidCredentials"),
        });
        return;
      }
      console.log("Login successful:", data);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("root", {
        type: "server",
        message: t("login.serverError"),
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
        <a
          href="/register"
          className="text-blue-600 dark:text-gray-100 hover:underline"
        >
          {t("login.register")}
        </a>
      </p>
    </AuthCard>
  );
}
