export const parse = (txt: string) => {
    let header;
    if (txt[0] == '['){
        header = txt.slice(0, txt.search(/]/) + 1)
        txt = txt.slice(txt.search(/]/) + 1, )
    }
    let token = txt.split(', ');
    console.log(token)
    const listItems = token.map((item, index) => 
        <li key={index}>
        {item}
        </li>
    )
    return (
        <ul>
            {header !== undefined ? <p>{header}</p> : <></>}
            {listItems}
        </ul>
    )
}