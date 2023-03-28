import { Categories } from '../components/Categories';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { Container, CategoriesContainer, MenuContainer, FooterContainer } from './styles';

export function Main() {
  return (
    <>
      <Container>

        <Header />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer>
          <Menu />
        </MenuContainer>

      </Container>
      <FooterContainer />
    </>
  );
}
