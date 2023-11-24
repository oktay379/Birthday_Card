export default function List( {people} ) {
    return (
        <>
            {/* 
                Onemli Not: div icerisinde kullanacagım propslar bu sekilde const ile tanimlandi
                data object icerisinde belirtilmisti oncesinde cunku.
                tanimlandi ve return icerisinde kullanilmis oldu
            */}
            {people.map((person)=> {
                const {id, name, age, image} = person
                return (
                    <article key={id}>
                        <div className="row">
                            <div className="col-sm-3 mb-3">
                                <img className="try" style={{width:"5rem"}} src={image} alt={name} />
                            </div>
                            <div className="col-sm-6">
                                <h4>{name}</h4>
                                <p>{age} years</p>
                            </div>
                        </div>
                    </article>
                );
            })}
        </>
        
    )
}