import React from "react";
import Form from "../../forms/components/Form";
import FormTextField from "../../forms/components/FormTextField";
import ROUTES from "../../routes/routesModel";

const CardForm = ({
  onSubmit,
  onReset,
  errors,
  validateForm,
  onInputChange,
  data,
  title,
}) => {
  return (
    <Form
      onSubmit={onSubmit}
      onReset={onReset}
      errors={errors}
      validateForm={validateForm}
      styles={{ maxWidth: "800px" }}
      title={title}
      to={ROUTES.ROOT}
    >
      <FormTextField
        name="title"
        label="title"
        error={errors.title}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <FormTextField
        name="subtitle"
        label="subtitle"
        error={errors.subtitle}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <FormTextField
        name="description"
        label="description"
        error={errors.description}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <FormTextField
        name="phone"
        label="phone"
        type="phone"
        error={errors.phone}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <FormTextField
        name="email"
        label="email"
        type="email"
        error={errors.email}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <FormTextField
        name="webUrl"
        label="web"
        error={errors.webUrl}
        onChange={onInputChange}
        data={data}
        sm={6}
        required={false}
      />
      <FormTextField
        name="imageUrl"
        label="image url"
        error={errors.imageUrl}
        onChange={onInputChange}
        data={data}
        sm={6}
        required={false}
      />
      <FormTextField
        name="imageAlt"
        label="image alt"
        error={errors.imageAlt}
        onChange={onInputChange}
        data={data}
        sm={6}
        required={false}
      />
      <FormTextField
        name="state"
        label="state"
        error={errors.state}
        onChange={onInputChange}
        data={data}
        sm={6}
        required={false}
      />
      <FormTextField
        name="country"
        label="country"
        error={errors.country}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <FormTextField
        name="city"
        label="city"
        error={errors.city}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <FormTextField
        name="street"
        label="street"
        error={errors.street}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <FormTextField
        name="houseNumber"
        label="houseNumber"
        type="number"
        error={errors.houseNumber}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <FormTextField
        name="zip"
        label="zip"
        type="number"
        error={errors.zip}
        onChange={onInputChange}
        data={data}
        sm={6}
        required={false}
      />
    </Form>
  );
};

export default React.memo(CardForm);
