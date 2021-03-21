export interface InputParams {
  packageVersionIds?: string[]
  owner?: string
  repo?: string
  packageName?: string
  packageType?: string
  numOldVersionsToDelete?: number
  ignoreTag?: string | null
  token?: string
}

const defaultParams = {
  packageVersionIds: [],
  owner: '',
  repo: '',
  packageName: '',
  packageType: '',
  numOldVersionsToDelete: 0,
  ignoreTag: 'latest',
  token: ''
}

export class Input {
  packageVersionIds: string[]
  owner: string
  repo: string
  packageName: string
  packageType: string
  numOldVersionsToDelete: number
  ignoreTag: string | null
  token: string

  constructor(params?: InputParams) {
    const validatedParams: Required<InputParams> = {...defaultParams, ...params}

    this.packageVersionIds = validatedParams.packageVersionIds
    this.owner = validatedParams.owner
    this.repo = validatedParams.repo
    this.packageName = validatedParams.packageName
    this.packageType = validatedParams.packageType
    this.numOldVersionsToDelete = validatedParams.numOldVersionsToDelete
    this.ignoreTag = validatedParams.ignoreTag
    this.token = validatedParams.token
  }

  hasOldestVersionQueryInfo(): boolean {
    return !!(
      this.owner &&
      this.repo &&
      this.packageName &&
      this.numOldVersionsToDelete > 0 &&
      this.token
    )
  }
}
