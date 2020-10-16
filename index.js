function Medchilgee(){
    return <h1>Hello, world!</h1>; //function component.props-gui
}
function Medchilgee123(props){
return <h1> {props.ner} </h1>; //function component.props-toi
}
function Medchilgee456(props){//function component.props-toi olon html renderlene
    return(

        <div>
            <h1> {props.ner} </h1>
            <h1>{props.nas}</h1>
        </div>
    )
    }
function EtsegComp(props)
{
    return(
        <div>
            <Medchilgee/>
            <Medchilgee123 ner={props.ner}/>
            <Medchilgee456 ner={props.ner} nas={props.nas}/>
            <table>
                <tr><td> {props.angi[0]} </td></tr>
                <tr><td> {props.angi[1]} </td></tr>
                <tr><td> {props.angi[2]} </td></tr>
            </table>
        </div>
    )
}
ReactDOM.render(
//    <Medchilgee/>,
    // <Medchilgee456 ner="HEllo Bat" nas='20' />,
    <EtsegComp ner="james" nas="25" angi={ ['Програм хангамж', 'Мэдээллийн систем','НББМС'] } />,
    document.getElementById('root')
);
