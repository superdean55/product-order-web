import { useForm } from "react-hook-form";
import { z } from "zod";
import Input from "../../ui/Input";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../ui/Button";

export const ChangePasswordForm = () => {
  const { t } = useTranslation();
  const RegisterSchema = z
    .object({
      currentPassword: z.string().min(6, t("register.errors.passwordMin")),
      password: z.string().min(6, t("register.errors.passwordMin")),
      confirmPassword: z.string().min(6, t("register.errors.passwordMin")),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: t("register.errors.passwordsDontMatch"),
    });

  type ChangePasswordData = z.infer<typeof RegisterSchema>;

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ChangePasswordData>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: { currentPassword: "", password: "", confirmPassword: "" },
  });

  const onSubmit = async (data: ChangePasswordData) => {
    try {
      await new Promise((r) => setTimeout(r, 800));

      console.log("Password changed successfuly:", data);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("root", {
        type: "server",
        message: t("register.serverError"),
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={t("profile.actions.settings.changePassword.currentPasswordLabel")}
          type="password"
          placeholder={t("profile.actions.settings.changePassword.currentPasswordPlaceholder")}
          {...register("currentPassword")}
          error={errors.currentPassword?.message}
        />
        <Input
          label={t("profile.actions.settings.changePassword.passwordLabel")}
          type="password"
          placeholder={t("profile.actions.settings.changePassword.passwordPlaceholder")}
          {...register("password")}
          error={errors.password?.message}
        />

        <Input
          label={t("profile.actions.settings.changePassword.confirmPasswordLabel")}
          type="password"
          placeholder={t("profile.actions.settings.changePassword.confirmPasswordPlaceholder")}
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 dark:bg-gray-600 hover:bg-blue-700 dark:hover:bg-gray-500"
        >
          {isSubmitting ? t("profile.actions.settings.changePassword.loading") : t("profile.actions.settings.changePassword.submit")}
        </Button>
      </form>
    </>
  );
};
