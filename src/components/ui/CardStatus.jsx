import Styles from './cardStatus.module.css'


export default function CardStatus ({counter , title ,icon}){
    
    return (
        <>
         {/* parent card */}
                                <div className={`${Styles.cardStatus} d-flex align-items-center`}>
                                
                                {/* Icon Parent */}
                                <div className={`${Styles.icon} w-100 d-flex align-items-center justify-content-center`}>
                                  {icon}
                                </div>
                                
                                {/* Info */}
                                <div className={`${Styles.info} w-100 d-flex flex-column align-items-center gap-2`}>
        
                                <span className={Styles.counter}>{counter}</span>
                                <span className={Styles.title}>{title}</span>
                                
                                </div>
        
                                </div>
        </>
    );
}