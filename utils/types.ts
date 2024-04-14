import { z } from "zod";

const ChannelDataSchema = z.object({
  channelId: z.string(),
  subscribers: z.string(),
  totalChannelViews: z.string(),
});

export type channelData = z.infer<typeof ChannelDataSchema>;

const VideoStatisticsSchema = z.object({
  id: z.string(),
  commentCount: z.string(),
  likeCount: z.string(),
  viewCount: z.string(),
});

const VideoThumbnailSchema = z.object({
  url: z.string(),
  height: z.string(),
  width: z.string(),
});

const videoDataSchema = z.object({
  title: z.string(),
  thumbnails: VideoThumbnailSchema.optional(),
  videoId: z.string(),
  description: z.string(),
  datePosted: z.string(),
  embedLink: z.string(),
  statistics: VideoStatisticsSchema,
});

export type VideoData = z.infer<typeof videoDataSchema>;

const BuildGallerySchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.array(z.string()),
  imageGallery: z.array(z.string()),
});

export type buildInfo = z.infer<typeof BuildGallerySchema>;

const CommentsAndRepliesSchema = z.object({
  videoId: z.string(),
  commenterName: z.string(),
  commenterImage: z.string(),
  commenterLikes: z.string(),
  commenterDate: z.string(),
  comment: z.string(),
  replierName: z.string(),
  replierImage: z.string(),
  replierLikes: z.string(),
  replierDate: z.string(),
  replierResponse: z.string(),
});

export type CommentsAndReplies = z.infer<typeof CommentsAndRepliesSchema>;
