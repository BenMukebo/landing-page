import "./Product.scss"
//use require to import the module
const Fade = require("react-reveal/Fade")

export interface IProduct {
    price: number
    title: string
    img: string
}

// type Props = {
//     item: {
//       poster_path: string,
//       name: string,
//       vote_count: number,
//     };
//   }
// export const Short: React.FC<Props>  = ({ item }) => {
// export const Product: React.FC<IProduct> = ({ price, title, img }) => {
//     return (
//         <Fade bottom cascade>
//             <li className="product-wrapper">
//                 <div className="product-container">
//                     <img src={`${img}`} alt="" />
//                     <div className="main-details">
//                         <div className="title">{title}</div>
//                         <div className="details">
//                             <div className="price">Price: $ {price}</div>
//                             <div className="button-wrapper">
//                                 <button className="button btn-primary">
//                                     Add to cart
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </li>
//         </Fade>
//     )
// }

// export default Product