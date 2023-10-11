/* eslint-disable react/prop-types */
/**
 * 
 * @param {string} name 
 * @returns 
 * Ce fichier c'est pour render une ligne de catégorie
 */


export function ProductCategoryRow ({name})
{
    return (
        <tr>
            <td colSpan={2}><strong>{name}</strong></td>
        </tr>
    )
}