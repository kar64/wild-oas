import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import { CabinRow } from "./CabinRow";
import { useCabins } from "./useCabins";
import { Table } from "../../ui/Table";
import { Menus } from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

export const CabinTable = () => {
  const { isLoading, cabins } = useCabins();
  const[searchParams]=useSearchParams()
  if (isLoading) return <Spinner />;
  if(!cabins.length) return <Empty resourceName='cabins'/>

  const filterValue=searchParams.get('discount')||'all'
  let filterCabin
 
    if(filterValue==='no-discount') filterCabin=cabins.filter(ca=>ca.discount===0)
    if(filterValue==='with-discount') filterCabin=cabins.filter(ca=>ca.discount!==0)
    if(filterValue==='all') filterCabin=cabins

    const sortValue=searchParams.get('sortBy')||'startDate-asc'
    const[field,direction]=sortValue.split('-')
    const revers=direction==='asc'?1:-1
     const sortCabin=filterCabin.sort((a,b)=>(a[field]-b[field])*revers)
  

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capicity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={sortCabin}
          render={(ca, i) => <CabinRow cabin={ca} key={i} />}
        />
      </Table>
    </Menus>
  );
};
