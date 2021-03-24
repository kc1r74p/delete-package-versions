import {GitHub} from '@actions/github'

export async function restGet(
  token: string,
  userName: string,
  packageName: string
): Promise<any> {
  const github = new GitHub(token)
  return await github.request(
    'GET /users/{userName}/packages/{packageType}/{packageName}/versions',
    {
      packageType: 'container',
      userName: userName,
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
