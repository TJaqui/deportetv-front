import { Box, FormControl, FormHelperText, FormLabel, HStack, Tab, TabList, TabPanels, Tabs } from "@chakra-ui/react"


const Filter = ({ data }) => {
  const paises = data.data.country

  return (
    <Tabs variant = 'soft-rounded' colorScheme = 'green'>
      <TabList>
        <Tab>Filtro 1</Tab>
        <Tab>Filtro 2</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <FormControl as= 'fieldset'>
            <FormLabel as= 'legend'>
              Filtrar por Confederación:
            </FormLabel>
            <RadioGroup defaultValue="CONMEBOL">
              <HStack spacing= '24px' colummn= {2}>
                <Radio value='6'>CONMEBOL</Radio>
                <Radio value='4'>AFC</Radio>
                <Radio value='3'>CAF</Radio>
                <Radio value='5'>CONCACAF</Radio>
                <Radio value='1'>FIFA</Radio>
                <Radio value='8'>IOC</Radio>
                <Radio value='7'>OFC</Radio>
                <Radio value='9'>NON-Affiliated</Radio>
                <Radio value='2'>UEFA</Radio>
              </HStack>
            </RadioGroup>
            <FormHelperText>Selecciona la confederación a la cual pertenece el equipo.</FormHelperText>
          </FormControl>
        </TabPanel>
        <TabPanel>
          <FormControl>
              <FormLabel>Filtrar por País</FormLabel>
              <Select placeholder='Selecciona el País'>
                {paises.map(pais => (
                  <option>pais.name</option>
                ))}
              </Select>
          </FormControl>
        </TabPanel>
      </TabPanels>
        
    </Tabs>
  )
}

export async function getStaticProps(){
  const key = 'W8TPhcJoRlIJMdLT'
  const secret = 'vik7dkDKOq1Q7TU41OTj0CIRYqBLDmF9'
  const url = 'https://livescore-api.com/api-client/countries/list.json?key=W8TPhcJoRlIJMdLT&secret=vik7dkDKOq1Q7TU41OTj0CIRYqBLDmF9&size=100&country_id=43'
  const respuesta = await fetch(url)
  const data = await respuesta.json()


  return {
      props:{
          data
      }
  }
}
export default Filter
