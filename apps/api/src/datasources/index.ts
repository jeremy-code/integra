import CivicAPI from "./CivicAPI";
import KnowledgeGraphAPI from "./KnowledgeGraphAPI";
import OpenSecretsAPI from "./OpenSecretsAPI";

const dataSources = () => ({
  civicAPI: new CivicAPI(),
  knowledgeGraphAPI: new KnowledgeGraphAPI(),
  openSecretsAPI: new OpenSecretsAPI(),
});

export default dataSources;
