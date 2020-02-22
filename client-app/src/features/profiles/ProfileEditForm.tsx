import React from "react";
import { Grid, Segment, Form, Button } from "semantic-ui-react";
import { Form as FinalForm, Field } from "react-final-form";
import TextInput from "../../app/common/form/TextInput";
import TextAreaInput from "../../app/common/form/TextAreaInput";
import { IProfile } from "../../app/models/profile";
import { isRequired, combineValidators } from "revalidate";
import { observer } from "mobx-react-lite";
interface IProps {
  profile: IProfile;
  updateProfile: (profile: IProfile) => void;
}

const validate = combineValidators({
  displayName: isRequired({ message: "Display Name is required" })
});
const ProfileEditForm: React.FC<IProps> = ({ profile, updateProfile }) => {
  return (
    <FinalForm
      validate={validate}
      initialValues={profile!}
      onSubmit={updateProfile}
      render={({ handleSubmit, invalid, pristine, submitting }) => (
        <Form onSubmit={handleSubmit} error>
          <Field
            name="displayName"
            placeholder="DisplayName"
            value={profile.displayName}
            component={TextInput}
          />
          <Field
            name="bio"
            placeholder="Bio"
            rows={3}
            value={profile.bio}
            component={TextAreaInput}
          />
          <Button
            loading={submitting}
            disabled={invalid || pristine}
            floated="right"
            positive
            content="Update Profile"
          />
        </Form>
      )}
    />
  );
};

export default observer(ProfileEditForm);
