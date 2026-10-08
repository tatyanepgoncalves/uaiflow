import { useQuery } from '@tanstack/react-query'
import { getUserContext } from '@/services/user-context-service'

export default function useContexts(userId: string) {
  const {
    data: userContexts = [],
    isLoading: isLoadingUserContexts,
    isError: isErrorUserContexts,
  } = useQuery({
    enabled: Boolean(userId && userId.trim() !== ''),
    queryFn: () => getUserContext(userId),
    queryKey: ['userContexts', userId],
  })

  return {
    isErrorUserContexts,
    isLoadingUserContexts,
    userContexts,
  }
}
