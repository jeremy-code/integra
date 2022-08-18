// import React from "react";
// import { motion, useMotionValue } from "framer-motion";
// import { Flex } from "@chakra-ui/react";

// const ProgressIndicator = () => {
//   const x = useMotionValue(0.5);

//   return (
//     <Flex flexDir="row" align="center">
//       <svg width="50" height="50" viewBox="0 0 100 100">
//         <circle
//           cx="50"
//           cy="50"
//           r="45"
//           pathLength="1"
//           opacity={0.3}
//           fill="none"
//           strokeWidth="0.5rem"
//           strokeDashoffset={0}
//           stroke="#3b82f6"
//         />
//         <motion.circle
//           cx="50"
//           cy="50"
//           r="45"
//           stroke="green"
//           fill="none"
//           strokeWidth="0.5rem"
//           strokeDashoffset={0}
//           pathLength="1"
//           style={{
//             pathLength: x,
//             transformOrigin: "50% 50%",
//             transform: "rotate(-90deg)",
//           }}
//         />
//       </svg>
//       <motion.div style={{ flexGrow: 1, height: "5px", background: "green" }} />
//       <svg width="50" height="50" viewBox="0 0 100 100">
//         <circle
//           cx="50"
//           cy="50"
//           r="45"
//           pathLength="1"
//           opacity={0.3}
//           fill="none"
//           strokeWidth="0.5rem"
//           strokeDashoffset={0}
//           stroke="#3b82f6"
//         />
//         <motion.circle
//           cx="50"
//           cy="50"
//           r="45"
//           stroke="green"
//           fill="none"
//           strokeWidth="0.5rem"
//           strokeDashoffset={0}
//           pathLength="1"
//           style={{
//             pathLength: x,
//             transformOrigin: "50% 50%",
//             transform: "rotate(-90deg)",
//           }}
//         />
//       </svg>
//       <motion.div style={{ flexGrow: 1 }} />
//       <svg width="50" height="50" viewBox="0 0 100 100">
//         <circle
//           cx="50"
//           cy="50"
//           r="45"
//           pathLength="1"
//           opacity={0.3}
//           fill="none"
//           strokeWidth="0.5rem"
//           strokeDashoffset={0}
//           stroke="#3b82f6"
//         />
//         <motion.circle
//           cx="50"
//           cy="50"
//           r="45"
//           stroke="green"
//           fill="none"
//           strokeWidth="0.5rem"
//           strokeDashoffset={0}
//           pathLength="1"
//           style={{
//             pathLength: x,
//             transformOrigin: "50% 50%",
//             transform: "rotate(-90deg)",
//           }}
//         />
//       </svg>
//     </Flex>
//   );
// };

// export default ProgressIndicator;
