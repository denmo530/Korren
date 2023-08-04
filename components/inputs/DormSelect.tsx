import React from 'react';
import Select from 'react-select';
import useDorms from '@/hooks/useDorms';

export type DormSelectValue = {
  label: string;
  value: string;
};

interface DormSelectProps {
  value?: DormSelectValue;
  onChange: (value: DormSelectValue) => void;
}

const DormSelect: React.FC<DormSelectProps> = ({ value, onChange }) => {
  const { getAll } = useDorms();

  return (
    <div>
      <Select
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            padding: '8px',
            borderWidth: '2px'
          }),
          input: (baseStyles) => ({
            ...baseStyles,
            fontSize: 'large'
          }),
          option: (baseStyle) => ({
            ...baseStyle,
            fontSize: 'large'
          })
        }}
        placeholder="Any Dorm"
        isClearable
        options={getAll()}
        value={value}
        onChange={(selectedDorm) => onChange(selectedDorm as DormSelectValue)}
        formatOptionLabel={(option: any) => <div>{option.label}</div>}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: 'rgba(104, 144, 77, 0.8)',
            primary25: 'rgba(104, 144, 77, 0.3)'
          }
        })}
      />
    </div>
  );
};

export default DormSelect;
