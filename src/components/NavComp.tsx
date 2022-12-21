import styles from '../styles/NavComp.module.css';
import NavButton from './NavButton';

type Props = {
    prev: string,
    next: string,
};

const NavComp = ({prev, next}: Props) => {
    if(prev !== undefined && next !== undefined){
        return (
            <section>
                { prev == '' ? 
                <NavButton to='/' text='Home'/> :
                <NavButton to={prev} text="Previous"/>}
                { next == '' ? 
                <NavButton to='/' text='Home'/>  : 
                <NavButton to={next} text="Next"/>}
            </section>
        );
    }
    return <></>;
}

export default NavComp;
