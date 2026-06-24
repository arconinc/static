import { readFile, stat } from 'node:fs/promises'
import path from 'node:path'

export const runtime = 'nodejs'

const rootDirectory = path.resolve(/* turbopackIgnore: true */ process.cwd())

const contentTypes: Record<string, string> = {
  '.css': 'text/css; charset=utf-8',
  '.eot': 'application/vnd.ms-fontobject',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.otf': 'font/otf',
  '.pdf': 'application/pdf',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml; charset=utf-8',
  '.xsl': 'application/xml; charset=utf-8'
}

type RouteContext = {
  params: Promise<{
    path?: string[]
  }>
}

function isSafePathSegment(segment: string) {
  return segment !== '..' && !segment.includes('/') && !segment.includes('\\')
}

async function findLegacyFile(segments: string[]) {
  if (!segments.every(isSafePathSegment)) {
    return null
  }

  const requestedPath = path.join(
    /* turbopackIgnore: true */ rootDirectory,
    ...segments
  )
  const candidates =
    segments.length === 0
      ? [path.join(/* turbopackIgnore: true */ rootDirectory, 'index.html')]
      : [
          requestedPath,
          path.join(/* turbopackIgnore: true */ requestedPath, 'index.html')
        ]

  for (const candidate of candidates) {
    const resolvedPath = path.resolve(candidate)

    if (!resolvedPath.startsWith(rootDirectory + path.sep)) {
      continue
    }

    try {
      const fileStat = await stat(/* turbopackIgnore: true */ resolvedPath)

      if (fileStat.isFile()) {
        return resolvedPath
      }
    } catch {
      // Try the next candidate.
    }
  }

  return null
}

export async function GET(_request: Request, context: RouteContext) {
  const params = await context.params
  const filePath = await findLegacyFile(params.path ?? [])

  if (!filePath) {
    return new Response('Not found', {
      status: 404,
      headers: {
        'content-type': 'text/plain; charset=utf-8'
      }
    })
  }

  const file = await readFile(/* turbopackIgnore: true */ filePath)
  const extension = path.extname(filePath).toLowerCase()

  return new Response(file, {
    headers: {
      'content-type': contentTypes[extension] ?? 'application/octet-stream'
    }
  })
}
