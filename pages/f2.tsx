import SeriesLayout from '@/components/Layout/SeriesLayout'
import { getRaces } from '@/lib/f2f3/f2'
import { Race } from '@/types/race'

type Props = {
  races: Race[]
}

export const getStaticProps = async () => ({ props: { races: await getRaces() }})

const F2 = ({ races }: Props) => (
  <SeriesLayout
    races={races}
    disclaimer="FIA FORMULA 2 CHAMPIONSHIP, FIA FORMULA 2, FORMULA 2, F2 are trademarks of the FIA."
  />
)

export default F2