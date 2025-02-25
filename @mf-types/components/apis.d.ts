
    export type RemoteKeys = 'components/UserMicroFrontEnd';
    type PackageType<T> = T extends 'components/UserMicroFrontEnd' ? typeof import('components/UserMicroFrontEnd') :any;