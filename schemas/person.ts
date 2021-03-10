/* Core */
import { MdPerson as icon } from 'react-icons/md';

export const personSchema = {
    name:   'person',
    title:  'Slicemasters',
    type:   'document',
    icon,
    fields: [
        {
            name:  'name',
            title: 'Name',
            type:  'string',
        },
        {
            name:    'slug',
            title:   'Slug',
            type:    'slug',
            options: {
                source:    'name',
                maxLength: 100,
            },
        },
        {
            name:        'description',
            title:       'Description',
            type:        'text',
            description: 'Tell us a bit about this',
        },
        {
            name:    'image',
            title:   'Image',
            type:    'image',
            options: { hotspot: true },
        },
    ],
};
