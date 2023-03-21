/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MVDB_KEY: string

}

interface ImportMeta {
  readonly env: ImportMetaEnv
}



