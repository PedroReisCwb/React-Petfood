import './styles.css';

const Product = () => {
    return (
        <div className="product col-3">
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTPNnCXOFtxH606StyDp9VOvsFdeS-a5adrDbikfL1BODi76dPUTENhCMfh888bNsz1j5yvZ8&usqp=CAc" 
                className="img-fluid align-center" 
            />
            <button className="btn btn-primary rounded-circle">+</button>
            <h4>
                <label className="badge badge-primary">R$ 90,00</label>
            </h4>
            <small>
                <b>Ração para Cães Adultos Pedigree Carne, Frango e Cereais - 15 Kg</b>
            </small>
        </div>
    )
}

export default Product;