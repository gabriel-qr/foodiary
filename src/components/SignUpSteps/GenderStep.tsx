import { Controller, useFormContext } from 'react-hook-form';
import { SignUpFormData } from './SignUpSchema';
import { OptionsSelector } from '../OptionSelector';

export function GenderStep() {
  const form = useFormContext<SignUpFormData>();

  return (
    <Controller
      control={form.control}
      name='gender'
      render={({ field }) => (
        <OptionsSelector
          value={field.value}
          onChange={field.onChange}
          options={[
            {
              icon: '👨',
              title: 'Masculino',
              value: 'male',
            },
            {
              icon: '👩',
              title: 'Feminino',
              value: 'female',
            },
          ]}
        />
      )}
    />
  );
}
