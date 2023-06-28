import React from 'react'
import TrendItem from './TrendItem'
import Spinner from '../reusable/Spinner'
import { ITrend } from '../../types/trend.type'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../types/store/IRootState.type'
import { getTopTrends } from '../../store/actions/trends.action'

const TrendsList = () => {
   const dispatch = useDispatch()
   const { topTrends } = useSelector((state: IRootState) => state.trends)
   const [loading, setLoading] = React.useState(false)

   React.useEffect(() => {
      const fetchData = async () => {
         setLoading(true)
         await dispatch(getTopTrends())
         setLoading(false)
      }
      fetchData()

      return () => setLoading(false)
   }, [dispatch])

   return (
      <div className="bg-secondary bg-opacity-25 rounded py-4	 px-lg-3 px-2">
         <div className="ms-2">
            <h5 className="fs-19">Trends for you</h5>
         </div>

         <main className="mt-3">
            {loading && (
               <div className="mt-5">
                  <Spinner size="sm" />
               </div>
            )}

            {topTrends.length > 0 &&
               topTrends.map((trend: ITrend) => <TrendItem trend={trend} key={trend._id} />)}

            {topTrends.length === 0 && !loading && (
               <div className="mt-6 text-center">
                  <p>No trends found</p>
               </div>
            )}
         </main>
      </div>
   )
}

export default TrendsList
