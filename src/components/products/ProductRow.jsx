/* eslint-disable react/prop-types */
/**
 * 
 * @param {object} products 
 * @returns 4
 * Ce fichier c'est pour render une ligne de produit
 */
export function ProductRow ({product})
{
    const style = product.stocked ? undefined : {color : 'red'};
    return (
        <tr>
            <td style={style}>{product.name}</td>
            <td>{product.price}$</td>
        </tr>
    )
}