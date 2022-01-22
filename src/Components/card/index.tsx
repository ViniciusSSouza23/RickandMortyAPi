import { Container, List, ListItem, ProfilePic, Title} from "./style";
interface Character{
    img: string,
    name: string
    species: string,
    gender: string,
    origin: string
    status: string
}
export function Card(props:Character)
{
    return (
       
            <Container>
                <ProfilePic src={props.img} alt="Character_Photo"></ProfilePic>
                <Title>{props.name}</Title>
                <List>
                    <ListItem><strong>Gender:</strong> {props.gender}</ListItem>
                    <ListItem><strong>Species:</strong> {props.species}</ListItem>
                    <ListItem><strong>Origin:</strong> {props.origin}</ListItem>
                    <ListItem><strong>Status:</strong> {props.status}</ListItem>
                </List>
            </Container>
    );
}