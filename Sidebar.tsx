/* Core */
import React from 'react';
import S from '@sanity/desk-tool/structure-builder';

const Sidebar: React.FC = () => {
    return S.list()
        .title('Slick\'s Slices')
        .items([
            S.listItem()
                .title('Home Page')
                .icon(() => <strong>🔥</strong>)
                .child(
                    S.editor()
                        .schemaType('storeSettings')
                        .documentId('downtown'),
                ),

            // ? Add the rest of the default document items
            ...S.documentTypeListItems().filter(
                item => item.getId() !== 'storeSettings',
            ),
        ]);
};

export default Sidebar;
