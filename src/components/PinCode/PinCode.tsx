import React  from 'react';
import PinInput from 'react-pin-input';
import './styles.css';


interface Iprops{
  value: string;
  onChange: (text: string) => void;
  onComplete: () => void;
}
export const PinCode = ({ value, onChange, onComplete }: Iprops) => {
  return (
    <div className={'pin-code-input'}>
      <PinInput
        length={4}
        initialValue={value}
        // secret
        onChange={(value, index) => onChange(value)}
        type="numeric"
        inputMode="number"
        style={{ color: '#000', }}
        inputStyle={{ backgroundColor: '#F5F5F7', borderWidth: 0, borderTopWidth: 1, borderColor: '#CACACC' }}
        inputFocusStyle={{ borderColor: 'blue' }}
        onComplete={(value, index) => onComplete()}
        autoSelect={true}
        regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
      />
    </div>
  );
};
