
import styles from './ProfileCard.module.css';

function ProfileCard() {
  return (
    <div  className={`${styles['card']}`}>

        <img
            src="https://images.automais.pt/2023/07/01-2003-2023-20-anos-de-lamborghini-gallardo.jpg"
            alt="Profile"
            className="rounded-full w-32 h-32 mx-auto mb-4"
        />
      <div className=''>
        <h2 className="text-xl font-bold mb-2">Lamborghini Gallardo</h2>
        <p className="text-gray-700">Obra prima da engenharia Italiana, lancado em 2003 foi responsavel por ser o maior sucesso de vendas da marca ate o momento, ainda mais em um periodo que a marca estava se reestruturando apos uma quase falencia. Equipado com um motor V10 5.0 de 510cv e tracao Integral AWD, proporcionava uma experiencia de direcao incrivel. Quem nao ama um ronco de motor v10 nao é? Masterpiece!</p>
      </div>
    </div>
  );
}

export default ProfileCard;