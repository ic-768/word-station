import { ReactElement } from "react";

import { AppHeaderLayout } from "layouts";
import { MeaningSearch } from "features/words";

/*
 * User can submit a word in order for the backend to contact the dictionary API, and get the results.
 */
export default function GetMeaning() {
  return <MeaningSearch />;
}

GetMeaning.getLayout = function getLayout(page: ReactElement) {
  return <AppHeaderLayout>{page}</AppHeaderLayout>;
};
