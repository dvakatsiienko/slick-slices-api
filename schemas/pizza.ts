/* Core */
import { MdLocalPizza as icon } from 'react-icons/md';

/* Components */
import { PriceInput } from '../components';

export const pizzaSchema = {
    name:   'pizza',
    title:  'Pizzas',
    type:   'document',
    icon,
    fields: [
        {
            name:        'name',
            title:       'Pizza Name',
            type:        'string',
            description: 'Name of the pizza',
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
            name:    'image',
            title:   'Image',
            type:    'image',
            options: { hotspot: true },
        },
        {
            name:           'price',
            title:          'Price',
            type:           'number',
            description:    'Price of the pizza in cents',
            validation:     Rule => Rule.min(1000),
            inputComponent: PriceInput,
        },
        {
            name:  'toppings',
            title: 'Toppings',
            type:  'array',
            of:    [{ type: 'reference', to: [{ type: 'topping' }] }],
        },
    ],
    preview: {
        select: {
            title:    'name',
            media:    'image',
            topping0: 'toppings.0.name',
            topping1: 'toppings.1.name',
            topping2: 'toppings.2.name',
            topping3: 'toppings.3.name',
        },
        prepare: field => {
            const { title, media, ...toppings } = field;

            const tops = Object.values(toppings).filter(Boolean);

            return {
                title,
                media,
                subtitle: tops.join(', '),
            };
        },
    },
};
