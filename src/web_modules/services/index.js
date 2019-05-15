import {queryData,delay,postTest} from './query-service';
import {login,regist} from './loginregist-service';
import {saveArticle,getArticle,getComments,saveComments,
    likeComments,dislikeComments,getUserArticles,likeArticleById,addFavoByArticleId} from './article-service';
import{getUserInfos,updateUserHeadImg,updateUser,followTargetUser,
    checkfollowTargetUser,unfollowTargetUser,queryUserfollows,
    queryUserfollowers,queryfollowcount,getLikeFavoStatus,getUserFavo} from './user-service';
export {
    queryData,
    delay,
    postTest,
    regist,
    login,
    saveArticle,
    getArticle,
    getComments,
    saveComments,
    likeComments,
    dislikeComments,
    getUserInfos,
    getUserArticles,
    updateUserHeadImg,
    updateUser,
    likeArticleById,
    followTargetUser,
    checkfollowTargetUser,
    unfollowTargetUser,
    queryUserfollows,
    queryUserfollowers,
    queryfollowcount,
    getLikeFavoStatus,
    addFavoByArticleId,
    getUserFavo
}