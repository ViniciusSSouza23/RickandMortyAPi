import { Container } from "./style";

interface PaginationFunctions
{
    onHandleClickNext:()=>void;
    onHandleClickPrev:()=>void;
}
export function Pagination(props:PaginationFunctions)
{
    return(
       <Container>
           <button type="submit" onClick={()=>props.onHandleClickPrev()} >Previous</button>
           <button type="submit" onClick={()=>props.onHandleClickNext()}>Next</button>
       </Container>
    );
}