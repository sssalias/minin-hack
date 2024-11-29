import { OrganizationsApi } from 'src/services-api'
import { apiConfig } from 'src/services-api/client'
import { useOrgStore } from 'src/store'

export const orgClient = new OrganizationsApi(apiConfig)

export const getAllOrg = async () => {
    const {data} = await orgClient.getAllOrganizations()
    console.log(data)
    
    useOrgStore.getState().setData(data)
}