import { useEffect, useState } from "react";

const Result = ({ data }) => {
  const [nounSentencesPercentage, setNounSentencesPercentage] = useState("");
  const [verbSentencesPercentage, setVerbSentencesPercentage] = useState("");
  const [adverbSentencesPercentage, setAdverbSentencesPercentage] =
    useState("");
  const [adjectiveSentencesPercentage, setAdjectiveSentencesPercentage] =
    useState("");

  useEffect(() => {
    console.log(data);
    setNounSentencesPercentage(data.nounSentencesPercentage);
    setVerbSentencesPercentage(data.verbSentencesPercentage);
    setAdverbSentencesPercentage(data.adverbSentencesPercentage);
    setAdjectiveSentencesPercentage(data.adjectiveSentencesPercentage);
  }, [data]);
  return (
    <div>
      <p>
        The percentages of sentences having different parts of speech are shown
        below
        <br />
        <br />
      </p>
      <div>
        Percentage of sentences having Nouns is {nounSentencesPercentage}%
      </div>
      <div>
        Percentage of sentences having Verbs is {verbSentencesPercentage}%
      </div>
      <div>
        Percentage of sentences having Adverbs is {adverbSentencesPercentage}%
      </div>
      <div>
        Percentage of sentences having Adjectives is{" "}
        {adjectiveSentencesPercentage}%
      </div>
    </div>
  );
};
export default Result;
