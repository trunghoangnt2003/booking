import clsx from 'clsx';
type HomeProps = {
    classes?: {
        [key: string]: string;
    };
};
export const Home: React.FC<HomeProps> = ({classes}) =>{
    return (
        <div className={clsx(classes?.container,"text-red-400")}>
            Home
        </div>
    )
}