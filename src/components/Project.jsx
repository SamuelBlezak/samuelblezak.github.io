export default function Project(prop) {
    return(
        <article className="bg-white rounded-xl shadow-sm mb-6 border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden">

            <img className="w-full h-48 object-cover border-b border-gray-100" src={prop.img} alt="" />

            <div className="p-6">
                <h3 className="text-2xl font-bold text-black mb-2">{prop.title}</h3>
                <p className="text-sm font-semibold text-blue-600 mb-4">{prop.tech}</p>
                <p className="text-gray-600 mb-6">{prop.description}</p>
                <a className="inline-block bg-gray-900 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors" href={prop.url}>Link to extension</a>
            </div>
            
        </article>
    )
}