import styles from '../styles/NavComp.module.css';
import NavButton from './NavButton';

type Props = {
    prev: string,
    next: string,
};

const NavComp = ({prev, next}: Props) => {
    if(prev !== undefined && next !== undefined){
        return (
            <section className={styles.sectionClass}>
                <div className={styles.interactionContainer}>
                    <div className={styles.buttonContainer}>
                        { prev == '' ? 
                        <NavButton align='left' to='./' text='Home'/> :
                        <NavButton align='left' to={prev} text="Previous"/>}
                        { next == '' ? 
                        <NavButton align='right' to='./' text='Home'/>  : 
                        <NavButton align='right' to={next} text="Next"/>}
                    </div>
                </div>
            </section>
        );
    }
    return <></>;
}

export default NavComp;
