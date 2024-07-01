

export default function Profile({nom,prenom}) {
    return (
        <div className='flex flex-col items-center gap-5 mb-5'>
            <img className="w-[300px]" src="./images/avatar.png" alt="" />
            <h2 className="text-4xl font-semibold">{nom} {prenom}</h2>
        </div>
    )
}