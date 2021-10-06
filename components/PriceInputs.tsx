/* Core */
import React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

/* Instruments */
import { formatMonet } from '../helpers';

export const PriceInput: React.FC<PriceInputProps> = props => {
    const {
        type, value, onChange, inputComponent,
    } = props;

    const handleChange = event => onChange(createPatchFrom(event.target.value));

    return (
        <div>
            <h2>
                {type.title} - {value ? formatMonet(value / 100) : ''}
            </h2>
            <p>{type.description}</p>
            <input
                ref = { inputComponent }
                type = { type.name }
                value = { value }
                onChange = { handleChange }
            />
        </div>
    );
};

PriceInput.focus = function () {
    this._inputElement.focus();
};

/* Helpers */
function createPatchFrom(value) {
    return PatchEvent.from(value === '' ? unset() : set(Number(value)));
}

/* Types */
interface PriceInputProps {}
