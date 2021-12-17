interface IProps{
    name?: string;
}
export function Welcome(props: IProps){
    const compTitle = '- Welcome-Component - ';

    const {name } = props;
    // props.name = "Ramesh"; props names are read only so cant change it
    return (
        <div>
            {compTitle} {name}
        </div>
    )
}