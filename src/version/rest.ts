import {GitHub} from '@actions/github'

export async function restGet(
  token: string,
  packageName: string
): Promise<any> {
  const github = new GitHub(token)
  return await github.request(
    'GET /user/packages/{packageType}/{packageName}/versions',
    {
      packageType: 'container',
      packageName: packageName
    }
  )
}

export async function restDelete(
  token: string,
  packageName: string,
  version: string
): Promise<any> {
  const github = new GitHub(token)
  return await github.request(
    'DELETE /user/packages/{packageType}/{packageName}/versions/{version}',
    {
      packageType: 'container',
      packageName: packageName,
      version: version
    }
  )
}
