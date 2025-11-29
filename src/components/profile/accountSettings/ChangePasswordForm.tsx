import { useForm } from "react-hook-form";
import { z } from "zod";
import Input from "../../ui/Input";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../ui/Button";
import { useChangePasswordMutation } from "../../../hooks/queries/useAuthQuery";
interface ChangePasswordFormProps{
  onSuccess: () => void;
}
export const ChangePasswordForm = ({onSuccess}: ChangePasswordFormProps) => {
  const { t } = useTranslation();
  const { mutateAsync: changePasswordMutaute, isPending: isChangingPassword } =
    useChangePasswordMutation();
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
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ChangePasswordData>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: { currentPassword: "", password: "", confirmPassword: "" },
  });

  const onSubmit = async (data: ChangePasswordData) => {
    try {
      const res = await changePasswordMutaute({
        currentPassword: data.currentPassword,
        newPassword: data.password,
      });

      if (!res.success) {
        setError("root", { type: "server", message: res.message });
        return;
      }
      onSuccess();
      reset();
      console.log(res.message);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    } catch (err: any) {
      setError("root", { type: "server", message: t("register.serverError") });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={t(
            "profile.actions.settings.changePassword.currentPasswordLabel"
          )}
          type="password"
          placeholder={t(
            "profile.actions.settings.changePassword.currentPasswordPlaceholder"
          )}
          {...register("currentPassword")}
          error={errors.currentPassword?.message}
        />
        <Input
          label={t("profile.actions.settings.changePassword.passwordLabel")}
          type="password"
          placeholder={t(
            "profile.actions.settings.changePassword.passwordPlaceholder"
          )}
          {...register("password")}
          error={errors.password?.message}
        />

        <Input
          label={t(
            "profile.actions.settings.changePassword.confirmPasswordLabel"
          )}
          type="password"
          placeholder={t(
            "profile.actions.settings.changePassword.confirmPasswordPlaceholder"
          )}
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />
        {errors.root && (
          <p className="text-red-500 dark:text-red-800 text-sm mb-4 text-center">
            {errors.root.message}
          </p>
        )}
        <Button
          type="submit"
          disabled={isSubmitting || isChangingPassword}
          className="bg-blue-600 dark:bg-gray-600 hover:bg-blue-700 dark:hover:bg-gray-500"
        >
          {isSubmitting || isChangingPassword
            ? t("profile.actions.settings.changePassword.loading")
            : t("profile.actions.settings.changePassword.submit")}
        </Button>
      </form>
    </>
  );
};
