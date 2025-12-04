import { useForm } from "react-hook-form";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { ButtonColor } from "../../constants/buttonColors";
import { useUpdateUserMutation } from "../../hooks/queries/useUserQuery";
import type { UpdateUserInput } from "../../api/types/user";
import toast from "react-hot-toast";
interface UserUpdateData {
  firstName: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  dateOfBirth: string | null;
}
interface UpdateUserDataProps {
  user: UserUpdateData;
  onSuccess: () => void;
}
export const UpdateUserDataForm = ({
  onSuccess,
  user,
}: UpdateUserDataProps) => {
  const { t } = useTranslation();
  const { mutateAsync: updateUser, isPending } = useUpdateUserMutation();
  const phoneRegex = /^\+?[0-9]{7,15}$/;

  const RegisterSchema = z.object({
    firstName: z
      .string()
      .min(2, t("profile.actions.updateUser.errors.firstNameMin"))
      .max(50, "profile.actions.updateUser.errors.firstNameMax")
      .optional(),
    lastName: z
      .string()
      .min(2, t("profile.actions.updateUser.errors.lastNameMin"))
      .max(50, "profile.actions.updateUser.errors.lastNameMax")
      .optional(),
    phoneNumber: z
      .string()
      .regex(
        phoneRegex,
        t("profile.actions.updateUser.errors.invalidPhoneNumber")
      )
      .optional(),
    dateOfBirth: z
      .string()
      .optional()
      .refine(
        (val) => !val || !isNaN(Date.parse(val)),
        t("profile.actions.updateUser.errors.invalidDate")
      ),
  });

  type UpdateUserData = z.infer<typeof RegisterSchema>;

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<UpdateUserData>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      firstName: user?.firstName ?? "",
      lastName: user?.lastName ?? "",
      phoneNumber: user?.phoneNumber ?? "",
      dateOfBirth: user?.dateOfBirth
        ? new Date(user.dateOfBirth).toISOString().split("T")[0]
        : "",
    },
  });

  const onSubmit = async (data: UpdateUserData) => {
    try {
      const payload: UpdateUserInput = {
        firstName: data.firstName ?? null,
        lastName: data.lastName ?? null,
        phoneNumber: data.phoneNumber ?? null,
        dateOfBirth: data.dateOfBirth ?? null,
      };

      const res = await updateUser(payload);
      toast.success(res.message);
      onSuccess();
      reset();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const message =
        error?.response?.data?.message ||
        t("profile.actions.updateUser.errors.updateFailed");
      toast.error(message);
      setError("root", { message: message });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={t("profile.actions.updateUser.firstNameLabel")}
          type="text"
          placeholder={t("profile.actions.updateUser.firstNamePlaceholder")}
          {...register("firstName")}
          error={errors.firstName?.message}
        />
        <Input
          label={t("profile.actions.updateUser.lastNameLabel")}
          type="text"
          placeholder={t("profile.actions.updateUser.lastNamePlaceholder")}
          {...register("lastName")}
          error={errors.lastName?.message}
        />
        <Input
          label={t("profile.actions.updateUser.phoneNumberLabel")}
          type="tel"
          placeholder={t("profile.actions.updateUser.phoneNumberPlaceholder")}
          {...register("phoneNumber")}
          error={errors.phoneNumber?.message}
        />
        <Input
          label={t("profile.actions.updateUser.dateOfBirthLabel")}
          type="date"
          {...register("dateOfBirth")}
          error={errors.dateOfBirth?.message}
        />
        {errors.root && (
          <p className="text-red-500 dark:text-red-800 text-sm mb-4 text-center">
            {errors.root.message}
          </p>
        )}
        <Button
          buttonColor={ButtonColor.primary}
          type="submit"
          disabled={isSubmitting || isPending}
        >
          {isSubmitting || isPending
            ? t("profile.actions.updateUser.updating")
            : t("profile.actions.updateUser.update")}
        </Button>
      </form>
    </>
  );
};
