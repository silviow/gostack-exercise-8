import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Product } from '.';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const ProductContainer = styled.View`
  flex: 1;
  border-radius: 5px;
  margin-top: 60px;
  flex-direction: row;
`;

export const ProductList = styled(
  FlatList as new () => FlatList<Product>,
).attrs({
  numColumns: 2,
})`
  flex: 1;
  z-index: 2;
  padding: 0 10px;
`;

export const ProductCard = styled.View`
  background: #fff;
  padding: 16px 16px;
  border-radius: 10px;
  margin: 8px;
  flex: 1;
`;

export const ProductImage = styled.Image`
  top: 6px;
  height: 130px;
  width: 166px;
  align-self: center;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
  margin-top: 20px;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  margin-top: auto;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #e83f5b;
`;

export const ProductButton = styled.TouchableOpacity``;
