const config = require('../Client/Configs/config');
module.exports = {
  giveaway:
    (config.everyoneMention ? "@everyone\n\n" : "") +
    "🎉 **GIVEAWAY** 🎉",
  giveawayEnded:
    (config.everyoneMention ? "@everyone\n\n" : "") +
    "🎉 **GIVEAWAY ENDED** 🎉",
  drawing:  `Ends: **{timestamp}**`,
  inviteToParticipate: `React with 🎉 to participate!`,
  embedFooter: "Giveaways",
  noWinner: "Giveaway cancelled, no valid participations.",
  hostedBy: "Hosted by: {this.hostedBy}",
	winMessage: 'Congratulations, <@{this.winnerIds}>! You won **{this.prize.toUpperCase()}**!\n{this.messageURL}',
  winners: "winner(s)",
  endedAt: "Ended at"
}